import Features from '../Component/Features'
import Conferences from '../Component/Conferences'
import Membership from '../Component/Memberships'
import { Helmet } from 'react-helmet'

const Achievements = () => {
    return (
        <>
            <Helmet>
                <title>Achievements of Dr. Vandana Bansal</title>
                 <meta
                    name="description"
                    content="Explore the achievements, awards, professional conferences, memberships, and contributions of Dr. Vandana Bansal, Senior Gynaecologist and Infertility & IVF Specialist in Prayagraj."
                />
                <meta
                    name="keywords"
                    content="Dr Vandana Bansal achievements, Dr Vandana Bansal awards, Dr Vandana Bansal achievements and awards, Dr Vandana Bansal Prayagraj, best gynecologist in Prayagraj, senior gynecologist Prayagraj, infertility specialist Prayagraj, IVF specialist Prayagraj, gynecologist achievements Prayagraj, gynecologist awards Prayagraj, medical conferences Dr Vandana Bansal, Dr Vandana Bansal memberships, Dr Vandana Bansal professional achievements, women healthcare specialist Prayagraj"
                />
                <meta
                    property="og:title"
                    content="Achievements of Dr. Vandana Bansal"
                />
                <meta
                    property="og:description"
                    content="Discover the professional achievements, awards, conferences, memberships, and contributions of Dr. Vandana Bansal, Senior Gynaecologist and Infertility & IVF Specialist in Prayagraj."
                />
                <meta
                    property="og:type"
                    content="website"
                />
                <meta
                    property="og:url"
                    content="https://drvandanabansal.in/achievements"
                />
                <meta
                    property="og:site_name"
                    content="Dr. Vandana Bansal"
                />
                <meta
                    name="twitter:card"
                    content="summary_large_image"
                />
                <meta
                    name="twitter:title"
                    content="Achievements & Awards of Dr. Vandana Bansal | Prayagraj"
                />
                <meta
                    name="twitter:description"
                    content="Explore the achievements, awards, professional conferences, memberships, and contributions of Dr. Vandana Bansal, Senior Gynaecologist and Infertility & IVF Specialist in Prayagraj."
                />
                <link
                    rel="canonical"
                    href="https://drvandanabansal.in/achievements"
                />
            </Helmet>
            <div>
                <Conferences />
                <Features />
                <Membership />

            </div>
        </>
    )
}

export default Achievements