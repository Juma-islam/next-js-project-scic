## Authentication
This project uses a mock authentication system with a hardcoded email and password.
On successful login, an authentication cookie (`auth`) is stored in the browser.
Protected routes check the presence of this cookie to allow or restrict access.

