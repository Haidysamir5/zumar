export default function formatNumber(value){
    var numberFormat = new Intl.NumberFormat('en-IN');
    var formattedValue = numberFormat.format(value);
       
    return formattedValue;
}