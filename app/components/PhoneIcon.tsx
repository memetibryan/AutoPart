import Link from "next/link";
import { CALL_TO } from "../config";

const PhoneIcon = function PhoneIcon() {
    return (
        <Link href = {CALL_TO} className="call_blink">
            <i className="Phone is-animating"></i>
        </Link>
    )
}

export default PhoneIcon;