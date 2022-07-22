import { InputField, TextField } from './styles'
import { If } from 'ui/components/If'
import { InputProps } from './interface'


export function Input(props: InputProps) {
    const { label, disabled, placeholder, success, error } = props
    
    return (
        <TextField success={success} error={error}>
            <InputField type="text" placeholder={placeholder} success={success} error={error} />
            <If condition={success && !error}>
                <div className="icon">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.5114 9.25308V10.0197C18.5104 11.8168 17.9285 13.5653 16.8525 15.0046C15.7765 16.4439 14.2641 17.4968 12.5409 18.0063C10.8176 18.5158 8.97578 18.4547 7.29012 17.8319C5.60446 17.2091 4.16527 16.0582 3.18719 14.5506C2.20912 13.0431 1.74455 11.2598 1.86279 9.46667C1.98103 7.67355 2.67573 5.96668 3.84329 4.60064C5.01085 3.23459 6.58871 2.28256 8.34155 1.88653C10.0944 1.4905 11.9283 1.67169 13.5697 2.40308" stroke="#0BB07B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M18.5113 3.35254L10.178 11.6942L7.67798 9.1942" stroke="#0BB07B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
            </If>
            <If condition={error && !success}>
                <div className="icon">
                <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_291_299)">
                    <path d="M10.168 18.349C14.7703 18.349 18.5013 14.6181 18.5013 10.0157C18.5013 5.41333 14.7703 1.68237 10.168 1.68237C5.56559 1.68237 1.83463 5.41333 1.83463 10.0157C1.83463 14.6181 5.56559 18.349 10.168 18.349Z" stroke="#F03D3D" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M10.168 6.68237V10.0157" stroke="#F03D3D" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M10.168 13.3489H10.178" stroke="#F03D3D" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_291_299">
                    <rect width="20" height="20" fill="white" transform="translate(0.167969 0.015625)"/>
                    </clipPath>
                    </defs>
                </svg>

                </div>
            </If>
        </TextField>
    )
}
