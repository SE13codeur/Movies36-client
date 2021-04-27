import { Badge, Card } from 'antd'
import Meta from 'antd/lib/card/Meta'
import React from 'react'

const MovieCard = ({ movie }) => {
    return (
        <div style={{ width: 300, margin: '1rem' }}>

            <Badge count='Best Prices'>
                <Card
                    cover={
                        <img
                            style={{
                                width: '300px',
                                height: '350px',
                                objectFit: 'cover'
                            }}
                            alt={movie.name}
                            src={`https://source.unsplash.com/random/${Math.ceil(
                                Math.random() * 1000 + 300
                            )}x350/?surf`}
                        />
                    }
                
                >
                    <Meta
                        title={movie.name.toUpperCase()}
                        description={`Max People: ${movie.maxPeople}`}
                    />
                </Card>
            </Badge>
            
        </div>
            
        
    )
}

export default MovieCard