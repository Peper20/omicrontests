from typing import Protocol


from sqlalchemy import Select, select


from .core import AbstractAsyncSession




class BaseRepo(Protocol):
    _session: AbstractAsyncSession


    def __init__(self, session: AbstractAsyncSession) -> None:
        self._session = session