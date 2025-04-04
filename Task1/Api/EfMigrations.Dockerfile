# См. статью по ссылке https://aka.ms/customizecontainer, чтобы узнать как настроить контейнер отладки и как Visual Studio использует этот Dockerfile для создания образов для ускорения отладки.

# Этот этап используется при запуске из VS в быстром режиме (по умолчанию для конфигурации отладки)
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
USER $APP_UID
WORKDIR /app

# Этот этап используется для сборки проекта службы
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