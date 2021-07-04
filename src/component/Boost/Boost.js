import React from 'react'
import { Button2 } from '../../Globalstyle'
import { Link } from 'react-router-dom';
import { BoostItem,Heading,IMG } from './Boost.elements'
const Boost = () => {
    return (
        <BoostItem>
            <Heading>
      Boost your links today
            </Heading>
            <IMG>
            <Link >
                  <Button2  primary >
                    GetStarted
                  </Button2>
                </Link>
            </IMG>
        </BoostItem>
    )
}

export default Boost
