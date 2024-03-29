from fastapi import FastAPI


from .router import router
from .models import User # noqa
from .auth import current_active_user # noqa



def init(app: FastAPI) -> None:
    app.include_router(router)

