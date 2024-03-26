from unittest import TestCase
from fastapi.testclient import TestClient


from root import app




class TestAuth(TestCase):
    def test_register(self):
        with TestClient(app) as client:
            response = client.post(
                '/auth/register',
                json={
                    "email": "user@example.com",
                    "password": "string",
                    "is_active": True,
                    "is_superuser": False,
                    "is_verified": False
                },
            )
            self.assertEqual(response.status_code, 201)


            response = register_default(client)
            self.assertEqual(response.status_code, 204)


            response = client.get('users/me')
            self.assertEqual(response.status_code, 200)
            user = response.json()
            user_must_be = {
                "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                "email": "user@example.com",
                "is_active": True,
                "is_superuser": False,
                "is_verified": False
            }

            self.assertNotEqual(user['id'], '')
            self.assertEqual(user['email'], user_must_be['email'])
            self.assertEqual(user['is_active'], user_must_be['is_active'])
            self.assertEqual(user['is_superuser'], user_must_be['is_superuser'])
            self.assertEqual(user['is_verified'], user_must_be['is_verified'])


def register_default(client):
    response = client.post(
        '/auth/login',
        headers={"content-type": "application/x-www-form-urlencoded"},
        data={
            "username": "user@example.com",
            "password": "string",
        },
    )
    client.cookies.set('fastapiusersauth', response.cookies['fastapiusersauth'])
    
    return response




