export interface Product {
    id: string,
    name: string,
    description: string,
    logo: string,
    date_release: string,
    date_revision: string
}

interface ErrorProps {name: string, isError: boolean, messageError: string}

export interface ErrorsControls {
    id: ErrorProps,
    name: ErrorProps,
    description: ErrorProps,
    logo: ErrorProps,
    date_release: ErrorProps,
    date_revision: ErrorProps
}

export interface ResponseSubmit {
    response: any,
    isSuccess: boolean
}