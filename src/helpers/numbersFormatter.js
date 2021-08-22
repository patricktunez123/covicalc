/**
 * A function to format numbers adding commas
 * @author Patrick TUNEZERWANE
 * @since Sun, August 22, 2021
 */

export function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
