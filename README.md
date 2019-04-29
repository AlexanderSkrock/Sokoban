# Sokoban

> In einem einfachen Spielprinzip gilt es, mit einer Spielfigur alle Objekte – meistens sind es Kisten – nacheinander auf die dafür vorgesehenen Zielfelder zu bewegen, wobei es üblicherweise keine Vorgabe gibt, welches Objekt auf welches Zielfeld bewegt werden soll. Die Kisten können von der Spielfigur nur geschoben und nicht gezogen werden, ein Verschieben mehrerer Kisten zugleich ist nicht möglich. Üblicherweise sind die einzig möglichen Bewegungsrichtungen der Spielfigur nach oben, unten, rechts und links, sodass keine diagonalen Züge möglich sind. [(Wikipedia)](https://de.wikipedia.org/wiki/Sokoban)

## SokobanServer

Dieses Teilprojekt ist ein NodeJS-Server zum Bereitstellen und Persistieren der spielbezogenen Daten. Spielbezogene Daten sind Tiles und Maps sowie statische Assets bspw. für die Kisten, die Kistenziele und den Spieler.

### Schnittstellen:

| HTTP-Methode | Pfad             | Beschreibung                |
|--------------|------------------|-----------------------------|
| GET          | "/maps"          | Abfragen aller Maps         |
| GET          | "/maps/:mapId"   | Abfrage einer Map per ID    |
| POST         | "/maps"          | Speichern einer Map         |
| DELETE       | "/maps/:mapId"   | Löschen einer Map           |
| GET          | "/tiles"         | Abfragen aller Tiles        |
| GET          | "/tiles/:tileId" | Abfragen eines Tiles per ID |
| POST         | "/tiles"         | Speichern eines Tiles       |
| DELETE       | "/tiles/:tileId" | Löschen eines Tiles         |

## SokobanWeb

Dieses Teilprojekt ist eine Ausprägung des Spiels als Angular-Anwendung.

### Komponenten

#### Tile-Editor
In dieser Komponente können eigene Tiles erstellt werden, mit denen im Nachgang Maps gebaut werden können.

#### Map-Editor
In dieser Komonente können mit Hilfe der im Tile-Editor erstellten Tiles eigene Maps erstellt werden.

### Spiel
In dieser Komponente können erstellte Maps gespielt werden.

## Sprites
Alle hier nicht aufgeführten Sprites wurden selbst erstellt.
- [Box](https://www.bienenfisch-design.de/wp-content/uploads/2018/06/wood-textures-005.jpg)
- [Spieler](https://img00.deviantart.net/4b3b/i/2016/050/7/6/lsw_s_top_down_base_by_hyomatanzaki-d9sb1b3.png)
- [Hintergrund](all-free-download.com)
