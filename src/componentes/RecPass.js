import React, { Component } from 'react';
import '../css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


class RecPass extends Component {
    render() {
        return (
            <>
                <div class="card login-form">
                    <div class="card-body">
                        <h3 class="card-title text-center">Recuperar contraseña </h3>

                        <div class="card-text">
                            <form>
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Enter your email address and we will send you a link to reset your password.</label>
                                    <input type="email" class="form-control form-control-sm" placeholder="Enter your email address" />
                                </div>

                                <button type="submit" class="btn btn-primary btn-block">Send password reset email</button>
                            </form>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default RecPass;