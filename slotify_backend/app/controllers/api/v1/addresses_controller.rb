class Api::V1::AddressesController < ApplicationController
    before_action :set_user, only:[:update]
    def index
        @addresses = Address.all
        render json: @addresses, status: :ok
    end

    def create
        @address = Address.new(address_params)
        if @address.save
            render json: @address, status: :created
        else
            render json: { errors: @address.errors.full_messages }, status: :unprocessable_entity
        end
    end
    
    def update
        if @address
            if @address.update(address_params)
                render json: @address, status: :ok
            else
                render json: { errors: @address.errors.full_messages }, status: :unprocessable_entity
            end
        else
            render json: { errors: "Address not found." }, status: :unprocessable_entity
        end
    end

    private

    def address_params
        params.require(:address).permit(:street_1, :street_2, :state, :city, :pincode)
    end

    def set_address
        @address = Address.find(params[:id])
    end
end