from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from uvicorn import run as _run


from .features import features
from .settings import cors_config 



def create_app() -> FastAPI:
    app = FastAPI()
    app.add_middleware(
        CORSMiddleware,
        **(dict(cors_config.unpack()))
    )
    
    for feature in features:
        if hasattr(feature, 'init'):
            feature.init(app)

    return app


app_executor = _run

