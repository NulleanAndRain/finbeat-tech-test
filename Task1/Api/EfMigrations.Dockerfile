# ��. ������ �� ������ https://aka.ms/customizecontainer, ����� ������ ��� ��������� ��������� ������� � ��� Visual Studio ���������� ���� Dockerfile ��� �������� ������� ��� ��������� �������.

# ���� ���� ������������ ��� ������� �� VS � ������� ������ (�� ��������� ��� ������������ �������)
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
USER $APP_UID
WORKDIR /app

# ���� ���� ������������ ��� ������ ������� ������
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
ARG BUILD_CONFIGURATION=Release
WORKDIR /src
COPY . .
RUN dotnet tool install --global dotnet-ef
ENV PATH="$PATH:/root/.dotnet/tools"
ENV ConnectionStrings__CodeValueDatabase="Server=sql1,1433;Database=CodeValueDatabase;User ID=sa;Password='Password123+'"
COPY ["./Api/appsettings.json", "./Api"]
# RUN dotnet-ef database update --project ./Implementation/EntityFrameworkDataLayer/EntityFrameworkDataLayer.csproj --startup-project ./Api/Api.csproj


ENTRYPOINT ["dotnet-ef", "database", "update", "--project", "./Implementation/EntityFrameworkDataLayer/EntityFrameworkDataLayer.csproj", "--startup-project", "./Api/Api.csproj"]