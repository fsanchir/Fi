from urllib import request
import os
import random
import requests
import subprocess
os.system("title MCopener")
tokens = requests.get("https://dl.fsip.ml/MCopener/tokens.ini")
tokens = tokens.text
tokens = tokens.split("|")
while True:
    ngroksource = "https://dl.fsip.ml/ngrok.exe"

    if os.path.isfile("ngrok.exe") == False:
        os.system("title MCopener - 소스 파일 다운로드 중..")
        request.urlretrieve(ngroksource,"ngrok.exe")
    os.system("title MCopener")
    token = random.choice(tokens)
    print(f"Appling Authtoken {token}...")
    os.system(f"ngrok authtoken {token} >nul")
    os.system("timeout /t 1 /nobreak >nul")
    os.system("ngrok tcp 25565 --region=jp")
    print("프로그램이 종료되었습니다. 만약 갑자기 꺼졌다면 아무 키를 눌러 다시 시작하세요.<br><br>다시 시작하시겠습니까? 다시 시작하시려면 아무 키나 누르세요.\n다시 시작하지 않으시려면 X키를 눌러 조의를 표하시지 마시고 종료하세요.")
    os.system("pause")