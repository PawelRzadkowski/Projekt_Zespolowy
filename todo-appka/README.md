# Lista Todo

##  Przygotowanie środowiska
cd backend
python -m venv venv
venv\Scripts\activate  # na Windowsie
lub source venv/bin/activate # na Linuxie / Macu

pip install -r requirements.txt

## Uruchomienie serwera
python -m uvicorn main:app --reload # będac w folderze backend

## Testowanie
W przeglądarce:
http://127.0.0.1:8000/docs
