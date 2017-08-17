/*

1.  Spraw, aby po kliknięciu buttona do listy został dodany elementy z napisem item oraz kolejnym numerem (tj. 0, 1, 2...)

2.  Użyj funkcji addEventListener, aby nadać listener na przycisk.
3.  Zapamiętaj w zmiennej list odniesienie do elementu z id list.
--->    var list = document.getElementById('list') 

4.  To samo zrób dla elementu <button> - przypisz go do zmiennej o nazwie add.
5.  Dodaj listener do buttona - ma on reagować na kliknięcie, czyli na rodzaj eventu click.
--->    add.addEventListener('click', function() {});

6.  Wewnątrz funkcji, która została przekazana w listenerze, dodaj kod odpowiadający za dodawanie elementów do listy.
7.  W tym celu wewnątrz funkcji zawartej w listenerze zdeklaruj zmienną element i 
8.  za pomocą metody 
--->    createElement() 
utwórz kolejne pozycje menu:

var element = document.createElement('li');

9.  Teraz zajmiemy się tekstami wewnątrz utworzonych elementów li.
10. Za pomocą element.innerHTML = 'item'; możemy przypisać tekst item,
11. następnie w odpowiednim miejscu wstawić numer bieżącego elementu.
--->    Możesz w tym celu skorzystać z funkcji getElementsByTagName 
--->    oraz właściwości length, aby dowiedzieć się, ile elementów ma lista ma w danym momencie.

12. Ostatnim krokiem będzie dodanie naszego elementu do zmiennej list.
--->    Do tego użyjemy funkcji appendChild(). 
Powinno to wyglądać tak: list.appendChild(element);. Pamiętaj żeby wszystko wykonywało się wewnątrz funkcji wykonywanej po kliku.

13. Stwórz nowe repozytorium i wyślij tam swoje zadanie, a link do niego wklej poniżej.
*/

var list = document.getElementById('js-list'),
    add = document.getElementById('js-addElem');

add.addEventListener('click', function(e) {
    var element = document.createElement('li');
    var countLi = document.getElementsByTagName('li').length;
    element.innerHTML = 'item ' + countLi;
    list.appendChild(element);
});