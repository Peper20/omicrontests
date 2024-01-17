from colorama import init; init() # noqa


from app import create_app, app_executor




def main() -> None:
    app = create_app()

    app_executor(app)


main()
