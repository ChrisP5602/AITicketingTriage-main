# Use the official node image as a base
FROM node:alpine

# Set environment variables
ENV SUPABASE_VERSION=latest
ENV SUPABASE_PORT=8000

# Install dependencies
RUN apk add --no-cache git

# Clone Supabase repository
RUN git clone --branch $SUPABASE_VERSION --depth 1 https://github.com/supabase/supabase.git /supabase

# Change working directory
WORKDIR /supabase

# Install dependencies
RUN npm install

# Expose port
EXPOSE $SUPABASE_PORT

# Run Supabase
CMD ["npm", "start"]
