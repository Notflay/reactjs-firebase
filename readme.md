tailwind:
npm install -D autoprefixer
npm install -D postcss-cli
npm install -D postcss

# Autorizacion

Solo permite ver los elementos de la db una vez te hayas registrado, esto se hizo por
reglas en firestore database :
rules_version = '2';
service cloud.firestore {
match /databases/{database}/documents {
match /{document=\*\*} {
allow read, write: if request.auth != null;
}
}
}
