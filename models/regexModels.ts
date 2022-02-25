export const emailRegex =
	/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

export const cellphoneRegex = /(^[0]{1}[678]{1}[0-9]{8}$)/

export const licenseNumberRegex = /(^[a-zA-Z0-9]{3,}$)/

export const registrationNumberRegex = /(^[a-zA-Z0-9]{3,}$)/

export const expiryDateRegex = /(^[2]{1}[0]{1}[0-9]{1}[0-9]{1}\-[0-1]{1}[0-9]{1}\-[0-3]{1}[0-9]{1}$)/

export const tareRegex = /(^[0-9]{3,}$)/

export const categoryRegex = /(^[0-9]{1}\.[0-9]{1}$)/

export const makeRegex = /(^[a-zA-Z0-9 \- ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝàáâãäåæçèéêëìíîïðñòóôõöøùúûüýÿΤΟΥΑ]{3,}$)/

export const vinRegex = /(^[a-zA-Z0-9]{3,}$)/

export const firstNameRegex = /(^[a-zA-Z \- ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝàáâãäåæçèéêëìíîïðñòóôõöøùúûüýÿ]{3,}$)/

export const lastNameRegex = /(^[a-zA-Z \- ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝàáâãäåæçèéêëìíîïðñòóôõöøùúûüýÿ]{3,}$)/

export const idNumberRegex = /(^[0-9]{13}$)/

export const xtraCardNumberRegex = /(^[9]{1}[7]{1}[1]{1}[0]{1}[0]{1}[0-9]{11}$)/

export const address1Regex = /(^[a-zA-Z0-9_\-, ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝàáâãäåæçèéêëìíîïðñòóôõöøùúûüýÿ]{3,}$)/

export const address2Regex = /(^[a-zA-Z0-9_\-, ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝàáâãäåæçèéêëìíîïðñòóôõöøùúûüýÿ]{3,}$)/

export const suburbRegex = /(^[a-zA-Z0-9_\-, ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝàáâãäåæçèéêëìíîïðñòóôõöøùúûüýÿ]{3,}$)/

export const regionRegex = /(^[a-zA-Z\- ]{3,}$)/

export const postalCodeRegex = /(^[0-9]{4}$)/

export const alphaRegex = /(^[a-zA-Z\-, ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝàáâãäåæçèéêëìíîïðñòóôõöøùúûüýÿ]$)/

export const numericRegex = /(^[0-9]$)/

export const alphaNumericRegex = /(^[a-zA-Z0-9\-, ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝàáâãäåæçèéêëìíîïðñòóôõöøùúûüýÿ]$)/

export const numbericDotRegex = /(^[0-9.]$)/
