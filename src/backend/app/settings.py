from dataclasses import dataclass, asdict
from os import environ


from dotenv import load_dotenv; load_dotenv()




# general settings {

DEBUG: bool = True

# }


# crypto area {

@dataclass
class CryptoConfig:
    secret: str
    algorithm: str = 'HS256'

if not DEBUG:
    crypto_config = CryptoConfig(
        secret=environ.get('secret'),
    )

else:
    crypto_config = CryptoConfig(
        secret='secret',
    )

# }


# db area {

@dataclass
class DbConfig:
    user: str
    password: str
    host: str
    name: str

    @property
    def url(self):
        return f'postgresql+asyncpg://{self.user}:{self.password}@{self.host}/{self.name}'

if not DEBUG:
    db_config=DbConfig(
        environ.get('user'),
        environ.get('password'),
        environ.get('host'),
        environ.get('name'),
    )

else:
    db_config=DbConfig(
        environ.get('debug_user'),
        environ.get('debug_password'),
        environ.get('debug_host'),
        environ.get('debug_name'),
    )

# }



# CORS config {

@dataclass
class CORSConfig:
    allow_origins: list[str]
    allow_credentials: bool
    allow_methods: list[str]
    allow_headers: list[str]

    def unpack(self):
        return asdict(self)


cors_config = CORSConfig(
    allow_origins=[
        'http://localhost',
        'http://localhost:8080',
        'http://localhost:5173',
        'http://127.0.0.1:5173',
    ],
    allow_credentials=True,
    allow_methods=['*'],
    allow_headers=[
        'Set-Cookie',
        'Access-Control-Allow-Headers',
        'Content-Type',
        'Authorization',
        'Access-Control-Allow-Origin',
    ],
)

# }

