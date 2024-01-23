from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from uvicorn import run as _run


from .features import features




def create_app() -> FastAPI:
    app = FastAPI()
    app.add_middleware(
        CORSMiddleware,
        allow_origins=["http://localhost",
    "http://localhost:8080",
    "http://localhost:5173",
    "http://127.0.0.1:5173"],
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["Set-Cookie", "Access-Control-Allow-Headers", 'Content-Type', 'Authorization', 'Access-Control-Allow-Origin'],
    )
    
    for feature in features:
        if hasattr(feature, 'init'):
            feature.init(app)

    return app


app_executor = _run

