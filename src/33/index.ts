import { Observable } from "rxjs";
import { scan } from "rxjs/operators";

function sortNumber(a: number, b: number) {
  return a - b;
}

function medianOfArray(arr: number[]) {
  const length = arr.length;
  arr.sort(sortNumber);
  if (length % 2 === 0) {
    return (arr[Math.floor(length / 2)] + arr[Math.floor(length / 2) - 1]) / 2;
  } else {
    return arr[Math.floor(length / 2)];
  }
}

const seq = [2, 1, 5, 7, 2, 0, 5];
const obs = new Observable(sub => {
  seq.forEach(sn => sub.next(sn));
});

obs
  .pipe(scan((acc, cur) => acc.concat(cur), []))
  .subscribe(n => console.log(medianOfArray(n)));
