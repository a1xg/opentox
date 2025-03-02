import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import ItemCard from '../ItemCard/ItemCard.jsx';
import { Stack } from '@mui/material';
import useStyles from './styles.js';

const About = (props) => {
    const classes = useStyles();
    return (
        <Container className={classes.container}>
            <ItemCard>
                <Box className={classes.contentWrapper}>
                    <Typography variant='h5'>About OpenTox</Typography>
                    <Box className={classes.textWrapper}>
                        <Typography variant='body1'>
                            OpenTox is a service for assessing the potential harm to human health of food
                            additives and cosmetics components. We recognize ingredients in English, as well
                            as E###(supplements) and CI##### numbers. The Opentox database contains more than
                            28000 ingredients.
                        </Typography>
                    </Box>

                    <Typography variant='h5'>How it works</Typography>
                    <Box className={classes.textWrapper}>
                        <Typography variant='body1'>
                            OpenTox makes it easy to assess the health risks of a particular food or cosmetic
                            product using complex calculations based on a large amount of scientific toxicological
                            data, and converting this data into understandable and simple risk ratings for each
                            ingredient and product as a whole. You don't have to google and read the wikipedia
                            articles for each ingredient, we will do it for you.
                        </Typography>
                    </Box>

                    <Typography variant='h5'>Opentox rating</Typography>
                    <Box className={classes.textWrapper}>
                        <Typography variant='body1'>
                            The OpenTox rating is calculated based on data from the GHS system. This is a multi-stage settlement system:
                            <br />
                            * the rating of an ingredient is calculated as the arithmetic mean, taking into account the level and hazard class for humans.
                            <br />
                            * Product score is calculated as the arithmetic average of the ratings of its ingredients.
                        </Typography>
                    </Box>

                    <Typography variant='h5'>GHS system</Typography>
                    <Box className={classes.textWrapper}>
                        <Typography variant='body1'>
                            We use the Globally Harmonized System of Classification and Labeling of Chemicals (GHS)
                            <Link href='https://unece.org/about-ghs' >
                                <Typography variant='caption'>[1]</Typography>
                            </Link>,
                            developed by the United Nations, as our criteria for assessing health hazards. The GHS system
                            was created due to the fact that different countries of the world have their own systems and
                            criteria for assessing the hazard of chemical components.
                            <br />
                            In the era of global international trade, some substances that are banned for use in one
                            country can be freely used in another. This leads to a lot of confusion and creates health risks
                            for end users.

                        </Typography>
                    </Box>

                    <Typography variant='h5'>CLP system and the problem of its implementation</Typography>
                    <Box className={classes.textWrapper}>
                        <Typography variant='body1'>

                            The Classification, Labeling and Packaging (CLP)
                            <Link href='https://echa.europa.eu/regulations/clp/understanding-clp'>
                                <Typography variant='caption'>[2]</Typography>
                            </Link> regulation based on the GHS system was introduced for the EU countries in 2008.
                            <br />
                            The CLP regulation obliges manufacturers and importers of chemicals and their mixtures (products) 
                            to include on their packaging information about possible risks to health and the environment 
                            in accordance with the GHS system.
                            <br />
                            Also, the regulation obliges to enter information about risks in the 
                            <Link href='https://echa.europa.eu/information-on-chemicals/cl-inventory-database/'> register</Link>, 
                            in which the data are aggregated and allow an objective assessment of the risks of a 
                            particular substance in order to avoid errors in classification.
                            <br />
                            Unfortunately, cosmetic products have a special status in the CLP rules, and manufacturers are not
                             yet required to include risk information on packaging according to the GHS. The introduction of the 
                             GHS system for cosmetic products and labeling requirements on packaging is currently under discussion 
                             and is in its infancy.

                             Government organizations that control the use of cosmetic ingredients only state the fact that
                              manufacturers have used certain ingredients, but cannot prohibit manufacturers from using an unsafe 
                              ingredient, as this requires long-term scientific research confirming the harmful effects on human 
                              health. The situation with E-supplements is slightly better. Some of them were allowed several decades
                               ago, and then were banned in many countries around the world.
                            <br />
                            Thus, today manufacturers and importers of cosmetics: Are not obliged to stick hazard labels on ingredients.
                             They can use in production any component that is not yet prohibited by law, but the risks for which have long been known 
                             <Link href='https://link.springer.com/article/10.1186/2190-4715-24-37' >
                                <Typography variant='caption'>[3]</Typography>
                            </Link>.
                        </Typography>
                    </Box>

                    <Typography variant='h5'>Links</Typography>
                    <Box className={classes.textWrapper} style={{ border: 'none', paddingTop: 0 }}>
                        <Stack direction='column' spacing={1}>
                            <Typography variant='caption'>
                                <b>[1]</b>
                                <Link href='https://unece.org/about-ghs'> Globally Harmonized System of Classification and Labelling of Chemicals (GHS)</Link>
                            </Typography>
                            <Typography variant='caption'>
                                <b>[2] </b>
                                <Link href='https://echa.europa.eu/regulations/clp/understanding-clp'>
                                    Classification, Labelling and Packaging (CLP) Regulation
                                </Link>
                            </Typography>
                            <Typography variant='caption'>
                                <b>[3]</b> Klaschka U: Risk management by labelling 26 fragrances?- Evaluation of Article 10 (1) of the seventh amendment (Guideline 2003/15/EC) of the cosmetic directive.J Hyg Environ Health 2010, 213: 308–320.
                                <Link href='https://link.springer.com/article/10.1186/2190-4715-24-37'>
                                    DOI:10.1016/j.ijheh.2010.04.001
                                </Link>
                            </Typography>
                        </Stack>
                    </Box>
                </Box>
            </ItemCard>
        </Container >
    )
};

export default About;
