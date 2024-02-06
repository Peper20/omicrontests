from fastapi import FastAPI


from .router import router



def init(app: FastAPI) -> None:
    app.include_router(router)

