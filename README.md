# 🕹️ Forca App - Fullstack com CI/CD e Kubernetes

---

## 📁 Estrutura do Projeto

forca.app/  
├── .github/workflows/  
│   ├── ci-cd-pipeline.yml  
│   ├── frontend.yml  
├── forca.api/    # Backend Node.js  
├── forca-client/ # Frontend React  
    │── /  infra
│   ├── app-k8s-prod.yaml  
│   ├── app-k8s-stage.yaml  
│   ├── app-k8s.yaml  
├── README.md

---

## 🌿 Fluxo de Branches

- `dev`: Desenvolvimento contínuo  
- `release/*`: Preparação para releases (ex: `release/1.0.0`)  
- `main`: Produção  

---

## ⚙️ Estrutura do Pipeline (GitHub Actions)

### Backend (`.github/workflows/backend.yml`)

- Roda testes automatizados (quando implementados)  
- Build da imagem Docker `jeanmendonca/forcaapi`  
- Push para o Docker Hub  
- Deploy para Kubernetes:  
  - `dev`: push para `dev`  
  - `stage`: push para `release/*`  
  - `prod`: push para `main`  

### Frontend (`.github/workflows/frontend.yml`)

- Build da imagem Docker `jeanmendonca/forcaclient`  
- Push para o Docker Hub  
- Deploy para Kubernetes:  
  - `dev`: push para `dev`  
  - `stage`: push para `release/*`  
  - `prod`: push para `main`  

---

## 🧪 Rodando Localmente

### 1. Backend

cd forca.api  
npm install   

### 2. Frontend

cd forca-client  
npm install  

### 3. Banco de Dados (MySQL)

PORT=3000  
DB_HOST=localhost  
DB_USER=root  
DB_PASS=root  
DB_NAME=forca  
JWT_SECRET=chaveapiforca  

---

## ☸️ Deploy no Kubernetes (GKE)

### Pré-requisitos

Conta GCP com GKE ativado  
Cluster Kubernetes criado  
Docker Hub com permissões de push  
kubectl configurado para o cluster  
Discos persistentes e storageClassName configurados no GKE  
Secrets e Namespaces criados previamente  

### Aplicando os YAMLs

kubectl apply -f k8s/app-default.yaml  
kubectl apply -f k8s/app-stage.yaml  
kubectl apply -f k8s/app-prod.yaml  

---

## 🔐 Segredos (Secrets)

### Exemplo de Secret para o banco:

apiVersion: v1  
kind: Secret  
metadata:  
&nbsp;&nbsp;name: db-secret  
&nbsp;&nbsp;namespace: app-k8s  
type: Opaque  
stringData:  
&nbsp;&nbsp;MYSQL_ROOT_PASSWORD: root  
&nbsp;&nbsp;MYSQL_DATABASE: forca  
&nbsp;&nbsp;MYSQL_USER: root  
&nbsp;&nbsp;MYSQL_PASSWORD: root  

### Exemplo de Secret para as aplicações:

apiVersion: v1  
kind: Secret  
metadata:  
&nbsp;&nbsp;name: app-secret  
&nbsp;&nbsp;namespace: app-k8s  
type: Opaque  
stringData:  
&nbsp;&nbsp;JWT_SECRET: chaveapiforca  

---

## 🚀 Acessando a Aplicação

### 1. Minikube

minikube service frontend -n app-k8s  

### 2. GKE (Google Cloud)

http://<EXTERNAL_IP>:30001  

Para descobrir o IP:

kubectl get service frontend -n app-k8s  
