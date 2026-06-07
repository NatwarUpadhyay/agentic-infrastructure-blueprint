FROM mcr.microsoft.com/azure-cli:latest
RUN apk add --no-cache python3 py3-pip
WORKDIR /app
COPY requirements.txt .
RUN pip3 install --no-cache-dir -r requirements.txt
COPY agent.py .
CMD ["python3", "agent.py"]
