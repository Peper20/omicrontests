from uuid import UUID, uuid4
from typing import AsyncGenerator, Annotated, Protocol, Any
from abc import abstractmethod


from sqlalchemy.ext.asyncio import (
    AsyncSession as _AsyncSession,
    async_sessionmaker,
    create_async_engine,
)
from sqlalchemy.orm import DeclarativeBase, Mapped, mapped_column


from app.settings import db_config




class Base(DeclarativeBase):
    pass


class AbstractAsyncSession(Protocol):
    # A plug for FastAPI Depends
    def __init__(self) -> None: raise NotImplementedError

    @abstractmethod
    async def commit(self, *args: Any, **kwargs: Any) -> Any: raise NotImplementedError

    @abstractmethod
    async def execute(self, *args: Any, **kwargs: Any) -> Any: raise NotImplementedError

    @abstractmethod
    def add(self, *args: Any, **kwargs: Any) -> Any: raise NotImplementedError

    @abstractmethod
    def add_all(self, *args: Any, **kwargs: Any) -> Any: raise NotImplementedError


class AsyncSession(_AsyncSession, AbstractAsyncSession):
    pass


engine = create_async_engine(db_config.url)
async_session_maker = async_sessionmaker(engine, expire_on_commit=False)


async def get_async_session() -> AsyncGenerator[AsyncSession, None]:
    async with async_session_maker() as session:
        yield session


def init_all_models():
    from app.auth import models
    from app.quizzes import models

