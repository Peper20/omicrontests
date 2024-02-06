from typing import Iterable, Any


def _convert(map_: Iterable[str], data: Iterable[Iterable[Any]]) -> list[dict]:
    return list(map(
        lambda x: dict(zip(map_, x)),
        data
    ))


users = _convert(
    ('id', 'email', 'hashed_password', 'is_active', 'is_superuser', 'is_verified'),
    [
        ('c868749e-8014-45fe-89ea-ac6534da525b', 'e@mail.ru', '$2b$12$$2b$12$Y3fQWvZ4zPVdmi730CerqeZQAhBsKgZ4fNzMOnKnoZuSWcD.OqLla', True, False, False),
    ],
)
quizzes = [

]

