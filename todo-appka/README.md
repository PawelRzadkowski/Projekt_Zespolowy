# Lista Todo

##  Przygotowanie środowiska
cd ..\todo-appka\backend

python -m venv venv # instalacja środowiska

venv\Scripts\activate  # na Windowsie

lub source venv/bin/activate # na Linuxie / Macu

pip install -r requirements.txt # moduły

## Uruchomienie serwera

npm run dev (w 2 terminalu w folderze ..\todo-appka)

python -m uvicorn main:app --reload # będac w folderze backend

## Testowanie

W przeglądarce:

localhost:5173 (lista)

http://127.0.0.1:8000/docs (fastapi)
