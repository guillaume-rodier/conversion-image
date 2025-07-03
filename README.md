# 🖼️ Convertisseur d'Images CLI

Un outil en ligne de commande basé sur Node.js permettant de convertir des images d’un format à un autre **sans compression ni redimensionnement**. Il prend en charge la conversion de fichiers individuels ou de **dossiers entiers** d’images.

---

## 🚀 Fonctionnalités

- ✅ Conversion sans perte de qualité
- ✅ Prise en charge de nombreux formats (JPEG, PNG, WebP, AVIF, etc.)
- ✅ Traitement d’un ou plusieurs fichiers
- ✅ Traitement automatique d’un dossier complet
- ✅ Facile à utiliser en CLI

---

## 🛠️ Installation

### 1. Cloner le projet

```bash
git clone <url-du-repo>
cd convert-image-cli
````

### 2. Installer les dépendances

```bash
npm install
```

---

## 💻 Utilisation

### ⚙️ Commande de base

```bash
node convert-cli.js --input <fichiers> --format <format-sortie> [--output <dossier>]
```

### 🔄 Options disponibles

| Option            | Description                                            | Obligatoire |
| ----------------- | ------------------------------------------------------ | ----------- |
| `-i, --input`     | Un ou plusieurs fichiers image à convertir             | Non         |
| `-d, --directory` | Dossier contenant des images à convertir               | Non         |
| `-f, --format`    | Format de sortie : `jpeg`, `png`, `webp`, `avif`, etc. | ✅ Oui       |
| `-o, --output`    | Dossier de sortie (défaut : `converted`)               | Non         |

---

## 📦 Exemples

### ✅ Convertir un seul fichier

```bash
node convert-cli.js -i ./image.jpg -f webp
```

### ✅ Convertir plusieurs fichiers

```bash
node convert-cli.js -i ./img1.png ./img2.jpeg -f avif -o ./sorties
```

### ✅ Convertir toutes les images d’un dossier

```bash
node convert-cli.js -d ./images -f png
```

### ✅ Combiner fichier(s) + dossier

```bash
node convert-cli.js -i ./extra.jpg -d ./photos -f jpeg
```

---

## 🖼️ Formats pris en charge

Entrée et sortie supportées par [`sharp`](https://sharp.pixelplumbing.com/):

* `jpeg`, `jpg`
* `png`
* `webp`
* `avif`
* `tiff`
* `gif` (lecture uniquement)

---

## ❗ Remarques

* **Aucune compression** ou réduction de qualité n’est appliquée.
* **Aucune redimension** : les dimensions des images originales sont conservées.
* Le script ignore les fichiers non-image.

---

## 📜 Licence

Ce projet est libre d'utilisation et modifiable selon vos besoins. Licence MIT par défaut.

---

## 🙋‍♂️ Auteur

Développé avec ❤️ par \[Guillaume Rodier].
