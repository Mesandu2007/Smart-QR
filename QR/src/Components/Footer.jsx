

export default function Footer(){


    return(
        <footer className="footer">
            <div className="footer-content">
                <h3>Smart QR</h3>
                <p>Create And Save</p>
               
                <p className="footer-copy">
                © {new Date().getFullYear()} Smart QR. All rights reserved.
                </p>

            </div>
        </footer>

    );
}