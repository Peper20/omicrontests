from fastapi import FastAPI


from .database import create_db_and_tables as _create_db_and_tables




def init(app: FastAPI) -> None:
    app.router.on_startup.append(_create_db_and_tables)



