from typing import AsyncGenerator


from sqlalchemy.ext.asyncio import (
    AsyncSession as _AsyncSession,
    async_sessionmaker,
    create_async_engine,
)
from sqlalchemy.orm import DeclarativeBase


from app.settings import db_config




class Base(DeclarativeBase):
    pass


AsyncSession = _AsyncSession
engine = create_async_engine(db_config.url)
async_session_maker = async_sessionmaker(engine, expire_on_commit=False)


async def get_async_session() -> AsyncGenerator[AsyncSession, None]:
    async with async_session_maker() as session:
        yield session


