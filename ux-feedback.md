# UX - Review

## 1. Form

### 1.1 Validierung

Nach dem erfolgreichen speichern des Formulars, werden die einzelnen Formfelder nicht zurückgesetzt.

![invalid form](./src/assets/images/ux/form_invalid.png)

Nach dem erfolgreichen speichern des Formulars, werden die einzelnen Formfelder zurückgesetzt.

![valid form](./src/assets/images/ux/form_solved.png)

### 1.2 Überschrift

Die Überschrift hält nicht den Standard abstand von 16px ein. Das Problem konnte mit der richtigen material class (mat-card-header) gelöst werden.

![invalid form](./src/assets/images/ux/form_header_solved.png)

## 2. Filter

Der Filter für die Kindergärten ist zu klein. Es ist schwierig die einzelnen Kindergärten zu finden.

![valid form](./src/assets/images/ux/filter_invalid.png)

Um die einzelnen Kindergärten besser zu finden, wird der Filter vergrössert.

![valid form](./src/assets/images/ux/filter_solved.png)

### 3. Kindergärten Cards

Die Bilder in den Cards sind nicht der card angepasst.

![valid form](./src/assets/images/ux/kindergarten_invalid.png)

Die Bilder in den Cards wurden angepasst. Alle bilder haben nun die gleiche Grösse, und margin.

![valid form](./src/assets/images/ux/kindergarten_solved.png)

### 4. Tabelle

In der Tabelle konnten zwei Fehler festgestellt werden:

![valid form](./src/assets/images/ux/table_invalid.png)

### 4.1 Namensgebung

Die Namensgebung der Spalten ist nicht einheitlich. Die Spalte `Kindergarden` sollte `Kindergarten` heißen.

### 4.2 Alters validierung

Die Alters validierung ist nicht korrekt. Das Kind kann nicht in einen Kindergarten angemeldet werden, wenn es jünger als 3 Jahre ist.

![valid form](./src/assets/images/ux/table_solved.png)

### 4.3 Geburtsdatum

Das Geburtsdatum wird nicht auf Deutsch angezeigt.

### 4.4 Registrierungsdatum

Das Registrierungsdatum wird nicht auf Deutsch angezeigt.
