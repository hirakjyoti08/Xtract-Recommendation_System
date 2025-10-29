from fastapi import FastAPI, Query
from fastapi.middleware.cors import CORSMiddleware
import pandas as pd

app = FastAPI(title="Xtract API")

# CORS setup to allow frontend (React/Next.js)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # you can restrict later for security
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

print("Xtract API is starting...")
df = pd.read_csv("/Users/apple/Documents/ML/Xtract/xtract-api/DataSet/arxiv_processed.csv")
print(f"Data loaded successfully: {len(df)} records")

@app.get("/search")
async def search(query: str = Query(None, description="Search query string")):
    if not query or not query.strip():
        return []

    q_lower = query.lower()

    search_cols = ["title", "abstract"]
    results = df[
        df[search_cols]
        .apply(lambda row: row.astype(str).str.lower().str.contains(q_lower).any(), axis=1)
    ]

    return results.head(50).to_dict(orient="records")
