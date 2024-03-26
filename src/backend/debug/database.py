from app.database import init_all_models, Base, engine



async def create_db_and_tables():
    init_all_models()

    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.drop_all)
        await conn.run_sync(Base.metadata.create_all)
        