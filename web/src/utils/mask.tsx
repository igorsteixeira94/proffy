export const phoneMask =( value:string )=> {
    return value
      .replace(/\D/gim, '') // substitui qualquer caracter que nao seja numero por nada
      .replace(/(\d{1})/,'($1')
      .replace(/(\d{2})(\d)/,'$1) $2')
      .replace(/(\(\d{2}\)) (\d)(\d)/,'$1 $2 $3')
      .replace(/(\d{4})(\d)/,'$1-$2')
      .replace(/(-\d{4})\d+?$/, '$1') // captura 2 numeros seguidos de um traço e não deixa ser digitado mais nada
  }

  export const moneyMask = (value:string)=>{
    const money = value.replace(/\D/gim, '');
    return "R$ " + (Number(money)/100).toLocaleString('pt-br', {minimumFractionDigits: 2});;
  }