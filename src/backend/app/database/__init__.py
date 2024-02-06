from fastapi import FastAPI


from app.settings import DEBUG

from .repo import BaseRepo
from .core import (
    AbstractAsyncSession,
    init_all_models,
    engine,
    Base,
    get_async_session as _get_async_session,
)


def init(app: FastAPI) -> None:
    app.dependency_overrides[AbstractAsyncSession] = _get_async_session



