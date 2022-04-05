import { ReactComponent as BrandRecognition} from './../assets/icons/icon-brand-recognition.svg';
import { ReactComponent as DetailedRecords} from './../assets/icons/icon-detailed-records.svg';
import { ReactComponent as FullyCustomizable} from './../assets/icons/icon-fully-customizable.svg';
import { ReactComponent as Facebook} from './../assets/icons/icon-facebook.svg';
import { ReactComponent as Instagram} from './../assets/icons/icon-instagram.svg';
import { ReactComponent as Pinterest} from './../assets/icons/icon-pinterest.svg';
import { ReactComponent as Twitter} from './../assets/icons/icon-twitter.svg';

export default (name: string) => {
    switch(name) {
        case 'brand-recognition' :
            return <BrandRecognition />
        case 'detailed-records' :
            return <DetailedRecords />
        case 'fully-customizable' :
            return <FullyCustomizable />
        case 'facebook' :
            return <Facebook />
        case 'instagram' :
            return <Instagram />
        case 'pinterest' :
            return <Pinterest />
        case 'twitter' :
            return <Twitter />
        default :
            console.error(`Warning: Ícone ${name} não foi encontrado.`);
    }
}