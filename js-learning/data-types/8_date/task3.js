/* В Европейских странах неделя начинается с понедельника (день номер 1), затем идёт вторник 
(номер 2) и так до воскресенья (номер 7). Напишите функцию getLocalDay(date), 
которая возвращает «европейский» день недели для даты date.
 */

const getLocalDay = (date) => {
    const num = getDay(date);
    if (num === 0) return 7;
    return num + 1;
  };