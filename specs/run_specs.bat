BASE_FILE_PATH=../self-service/

@echo off

:: Environment dosyasındaki değişkeni oku
for /f "tokens=*" %%a in (..\self-service\env\test\js.properties) do @set BASE_FILE_PATH=%%a

:: 1. Specli Çalıştırma
gauge run --env test %BASE_FILE_PATH%login-logout.spec

:: 2. Specli Çalıştırma
::gauge run --env test %BASE_FILE_PATH%siparis.spec

:: 3. Specli Çalıştırma
gauge run --env test %BASE_FILE_PATH%kart-islemleri.spec

:: 4. Specli Çalıştırma
gauge run --env test %BASE_FILE_PATH%calisan-listesi.spec

:: 5. Specli Çalıştırma (Eksikti)
::gauge run --env test %BASE_FILE_PATH%kullanici-tanimlama.spec

:: 6. Specli Çalıştırma
gauge run --env test %BASE_FILE_PATH%raporlar.spec

:: 7. Specli Çalıştırma
gauge run --env test %BASE_FILE_PATH%x-ayarlar.spec

:: 8. Specli Çalıştırma
gauge run --env test %BASE_FILE_PATH%s-sorulan-sorular.spec
