from fastapi import FastAPI
from uvicorn import run as _run


from .features import features




def create_app() -> FastAPI:
    app = FastAPI()

    for feature in features:
        if hasattr(feature, 'init'):
            feature.init(app)

    return app


app_executor = _run

