import React from 'react'
import useFirestore from '../hooks/useFirestore'
import { motion } from "framer-motion"

function ImageGrid({ setSelectedImg }) {

    const { docs } = useFirestore('images')

    return (
        <div className="container">
            <div className="row">
                {docs && docs.map(doc => (
                    <motion.div className="col-md-6 col-lg-4 my-2 img-wrap"
                        key={doc.id}
                        onClick={() => setSelectedImg(doc.url)}
                        layout
                        whileHover={{ opacity: 1 }} >
                        <motion.img
                            src={doc.url}
                            alt="uploaded pic"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1 }}
                            style={{ width: "100%", height: "80%" }} />
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default ImageGrid
