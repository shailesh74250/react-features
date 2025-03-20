/*
  useDebounce hook will take function, timer as arguement
*/
// Need to complete
export function useDebounce(fun: any, timer: number) {
  return function() {
    setTimeout(()=>{
      fun();
    }, timer);
  }
}