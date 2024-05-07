export function validateRut(rut: string): boolean {
    
    rut = rut.replace(/[.-]/g, "");
    const num = rut.slice(0, -1);
    const dv = rut.slice(-1).toUpperCase();
  
    let suma = 0;
    let multiplo = 2;
    for (let i = num.length - 1; i >= 0; i--) {
      suma += parseInt(num[i]) * multiplo;
      multiplo++;
      if (multiplo === 8) {
        multiplo = 2;
      }
    }
  
    const resto = suma % 11;
    const dvEsperado = resto === 0 ? 0 : resto === 1 ? "K" : 11 - resto;
    console.log(dvEsperado.toString() === dv)
    return dvEsperado.toString() === dv;
  }