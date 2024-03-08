
## E-PrescribingSystem

E-PrescribingSystem is a web application developed using React for the frontend and ASP.NET Core for the backend. It allows users to perform various tasks related to e-prescribing medice for a day hospital

## Features

- User authentication and authorization
- Role-based access control (Admin, Nurse, Doctor, Pharmacist)
- Integration with Swagger for API documentation

## Installation

1. Clone the repository:

```bash
git clone https://github.com/pixelm123/E-PrescribingSystem.git
```

2. Navigate to the server project:

```bash
cd E_PrescribingSystem.Server
```

3. Install dependencies for the server project:

```bash
dotnet restore
```

4. Navigate to the client project:

```bash
cd ../e-prescribingsystem.client
```

5. Install dependencies for the client project:

```bash
npm install
```

## Usage

### Starting the Server

1. Navigate to the server project:

```bash
cd E_PrescribingSystem.Server
```

2. Run the server:

```bash
dotnet run
```

The server will start running on https://localhost:7303.

### Starting the Client

1. Navigate to the client project:

```bash
cd e-prescribingsystem.client
```

2. Run the client:

```bash
npm start
```

The client will start running on https://localhost:3003.

